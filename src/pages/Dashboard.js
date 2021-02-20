import React from 'react';
import { HeaderComponent, InputComponent, SelectorComponent, ButtonComponent } from '../components';
import './Dashboard.scss';

export class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this.list,
    };
  }

  saveCondition = async () => {

  }

  nextCase = () => {
  }

  list = [{
    name: 'Panados',
    code: 'PND',
    selected: false
  }, {
    name: 'Panados',
    code: 'PND',
    selected: false
  }, {
    name: 'Panados',
    code: 'PND',
    selected: false
  }, {
    name: 'Panados',
    code: 'PND',
    selected: false
  }, {
    name: 'Panados',
    code: 'PND',
    selected: false
  }, {
    name: 'Panados',
    code: 'PND',
    selected: false
  }, {
    name: 'Panados',
    code: 'PND',
    selected: false
  }, {
    name: 'Panados',
    code: 'PND',
    selected: false
  }];

  value = 'udhbdcn,rufyirbndi,ifbrcndicokudscbinediox.uriufhcn. rifyibunedjeribfcndi eubid ueibfdcn uhebdcdincb uebdcdni idbcnd. widbncsk dcbinsdj ibcnid';

  condition;

  selectedCondition = (conditionToSave, index) => {
    this.condition = conditionToSave;
    this.setState(({ items }) => ({
      items: items.map((elem, i) => {
        elem.selected = false;
        if (index === i) {
          elem.selected = true;
        }
        return elem;
      })
    }));
    console.log(this.condition);
  }

  render() {
    return (
      <div className="h-100 d-flex flex-column">
        <HeaderComponent name="André Coelho" />
        <div className="d-flex flex1 px-5">
          <div className="row w-100 pt-3 dashboardContainer">
            <div className="col-6 pr-3">
              <h5>Case description</h5>
              <div className="w-100">
                <InputComponent type="textarea" value={this.value} rows="20" />
              </div>
            </div>
            <div className="col-6 pl-3 d-flex flex-column">
              <h5>Conditions</h5>
              <div className="d-flex flex-column conditionSection">
                <div className="conditionSection">
                  <SelectorComponent list={this.state.items} onSelect={this.selectedCondition} />
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
          </div>
        </div>
      </div>

    )
  }
}

export default Dashboard;