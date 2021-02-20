import React from 'react';
import { HeaderComponent, InputComponent, SelectorComponent, ButtonComponent } from '../components';
import './Dashboard.scss';
import { CaseService } from '../services';
import { getUser } from '../services/utils.service';

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
    };
  }

  async componentDidMount() {
    const data = await this.caseService.getOpenCasesAndConditions();
    const { cases, conditions } = data;
    this.setState(() => ({ cases, conditions: conditions.map(condition => ({ ...condition, selected: false })), currentCase: cases[0], loading: false }));
  }

  saveCondition = async () => {
    console.log(this.state.currentCase, this.state.currentCondition)
  }

  nextCase = () => {
    this.setState(({ cases, conditions }) => {
      const [, ...nextCases] = cases;
      return { cases: nextCases, conditions: conditions.map(condition => ({ ...condition, selected: false })), currentCase: nextCases[0] };
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
        <div className="d-flex flex1 px-5">
          {!this.state.loading && this.state.currentCase && <div className="row w-100 pt-3 dashboardContainer">
            <div className="col-6 pr-3">
              <h5>Case description</h5>
              <div className="w-100">
                <InputComponent type="textarea" value={this.state.currentCase?.description} rows="20" />
              </div>
            </div>
            <div className="col-6 pl-3 d-flex flex-column">
              <h5>Conditions</h5>
              <div className="d-flex flex-column conditionSection">
                <div className="conditionSection">
                  <SelectorComponent list={this.state.conditions} onSelect={this.selectedCondition} />
                  <div className="buttonBox py-3">
                    <ButtonComponent buttonClick={this.saveCondition} label={"Save Condition"} buttonStyle={'green'} />
                  </div>
                </div>
                <div className="w-100">
                  <div className="buttonBox pt-3">
                    <ButtonComponent buttonClick={this.nextCase} label={"Next case"} />
                  </div>
                </div>
              </div>
            </div>
          </div>}
          {!this.state.loading && !this.state.currentCase && <div>No cases left</div>}
          {this.state.loading && <div>Loading</div>}
        </div>
      </div>

    )
  }
}

export default Dashboard;