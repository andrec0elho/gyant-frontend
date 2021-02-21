import React from 'react';
import { InputComponent, SelectorComponent, ButtonComponent, LoadingComponent } from '../components';
import './Dashboard.scss';
import { CaseService } from '../services';
import { getUser } from '../services/utils.service';
import { FaRegSmileBeam, FaGrimace } from 'react-icons/fa';
import HeaderComponent from '../components/Header';
import { toast, ToastContainer } from 'react-toastify';

export class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.caseService = new CaseService();
    const user = getUser();
    this.state = {
      loading: true,
      currentCondition: null,
      currentCase: null,
      conditions: [],
      cases: [],
      userName: user.name,
      errors: {
        onLoading: false,
      }
    };
  }

  async componentDidMount() {
    setTimeout(async () => {
      try {
        const data = await this.caseService.getOpenCasesAndConditions();
        const { cases, conditions } = data;
        this.setState(() => ({ cases, conditions: conditions.map(condition => ({ ...condition, selected: false })), currentCase: cases[0], loading: false }));
      } catch (error) {
        this.setState(({ errors }) => ({ errors: { ...errors, onLoading: true } }));
      }
    }, 200);

  }

  saveCondition = async () => {
    try {
      const fieldsToUpdate = {
        evaluated: true,
        conditionId: this.state.currentCondition._id
      };
      await this.caseService.updateCase(this.state.currentCase._id, fieldsToUpdate);
      this.setState(({ currentCase }) => ({ currentCase: { ...currentCase, condition: this.state.currentCondition._id } }));
      toast.success("Case updated sucessfully");
    } catch (error) {
      toast.success("Failed to update case. Please try again or login again");
    }
  }

  nextCase = () => {
    this.setState(({ cases, conditions }) => {
      const [, ...nextCases] = cases;
      const newCurrentCase = nextCases[0];
      return {
        cases: nextCases,
        conditions: conditions.map(condition => ({ ...condition, selected: false })),
        currentCase: newCurrentCase,
        currentCondition: null
      };
    });
  }

  selectedCondition = (conditionToSave, index) => {
    this.setState(({ conditions }) => ({
      currentCondition: conditionToSave,
      conditions: conditions.map((elem, i) => {
        elem.selected = false;
        if (index === i) {
          elem.selected = true;
        }
        return elem;
      })
    }));
  }

  render() {
    return (
      <div className="h-100 d-flex flex-column">
        <HeaderComponent name={this.state.userName} />
        {!this.state.errors.onLoading && <div className="d-flex flex1 px-5">
          {!this.state.loading && this.state.currentCase && <div className="row w-100 pt-3 dashboardContainer">
            <div className="col-6 pr-3">
              <h5>Case description</h5>
              <div className="w-100">
                <InputComponent type="textarea" value={this.state.currentCase.description} rows="20" disabled="true" />
              </div>
            </div>
            <div className="col-6 pl-3 d-flex flex-column">
              <h5>Conditions</h5>
              <div className="d-flex flex-column conditionSection">
                <div className="conditionSection">
                  <SelectorComponent list={this.state.conditions} customKey={this.state.currentCase._id} onSelect={this.selectedCondition} />
                  <div className="buttonBox py-3">
                    <ButtonComponent buttonClick={this.saveCondition} label={"Save Condition"} buttonStyle={'green'} disabled={!this.state.currentCondition} />
                  </div>
                </div>
                <div className="w-100">
                  <div className="buttonBox pt-3">
                    <ButtonComponent buttonClick={this.nextCase} label={"Next case"} disabled={!this.state.currentCase?.condition} />
                  </div>
                </div>
              </div>
            </div>
          </div>}
          {!this.state.loading && !this.state.currentCase && <div className="w-100 pt-3 text-center">
            <div className="py-3 iconSize">
              <FaRegSmileBeam />
            </div>
            <h5>No cases left to evaluate</h5>
          </div>}
          {this.state.loading && <div className="loadingContainer"><LoadingComponent /></div>}
        </div>}
        {this.state.errors.onLoading && <div className="d-flex flex1 px-5">
          <div className="w-100 pt-3 text-center">
            <div className="py-3 iconSize">
              <FaGrimace />
            </div>
            <h5>Ups... Something went wrong. Please logout and login again</h5>
          </div>
        </div>}
        <ToastContainer position="bottom-center" />
      </div>
    )
  }
}

export default Dashboard;