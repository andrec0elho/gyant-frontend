import React from 'react';
import { HeaderComponent, InputComponent } from '../components';

export class Dashboard extends React.Component {
  value = 'udhbdcn,rufyirbndi,ifbrcndicokudscbinediox.uriufhcn. rifyibunedjeribfcndi eubid ueibfdcn uhebdcdincb uebdcdni idbcnd. widbncsk dcbinsdj ibcnid';
  render() {
    return <div className="h-100">
      <HeaderComponent />
      <div className="d-flex h-100 px-5">
        <div className="row w-100">
          <div className="col-6">
            <h5>Case description</h5>
            <div className="w-100">
              <InputComponent type="textarea" value={this.value} rows="20" />
            </div>
          </div>
          <div className="col-6">Conditions</div>
        </div>
      </div>
    </div>
  }
}