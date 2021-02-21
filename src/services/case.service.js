import { createHeaders } from "./utils.service";
import axios from 'axios';

export class CaseService {
  async getOpenCasesAndConditions() {
    const casesAndConditions = await Promise.all([
      axios.get('http://localhost:3010/case', { headers: createHeaders(true), params: { evaluated: false } }),
      axios.get('http://localhost:3010/condition', { headers: createHeaders(true) })
    ]);

    return { cases: casesAndConditions[0].data, conditions: casesAndConditions[1].data };
  }

  async updateCase(caseId, body) {
    await axios.patch(`http://localhost:3010/case/${caseId.toString()}`, body, { headers: createHeaders(true) });
  }
}