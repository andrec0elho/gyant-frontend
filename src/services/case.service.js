import { createHeaders } from "./utils.service";
import axios from 'axios';
import { BaseService } from "./base.service";

export class CaseService extends BaseService {
  async getOpenCasesAndConditions() {
    const casesAndConditions = await Promise.all([
      axios.get(`${this.apiUrl}/case`, { headers: createHeaders(true), params: { evaluated: false } }),
      axios.get(`${this.apiUrl}/condition`, { headers: createHeaders(true) })
    ]);

    return { cases: casesAndConditions[0].data, conditions: casesAndConditions[1].data };
  }

  async updateCase(caseId, body) {
    await axios.patch(`${this.apiUrl}/case/${caseId.toString()}`, body, { headers: createHeaders(true) });
  }
}