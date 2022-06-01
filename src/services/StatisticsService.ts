import { CreateDomainInput } from '../dto/DomainDto';
import {
  DATA_ANALYSIS_ENDPOINT_URL,
  DATA_ANALYSIS_ENDPOINT_API_KEY,
} from "../config";
import axios from "axios";
import {CreateLastAnalysisStatsInput} from '../dto';


export const getLastAnalysisStats = async (domain: string) => {
     let analysisStats: CreateLastAnalysisStatsInput = {
       harmless:0,
       malicious: 0,
       suspicious: 0,
       undetected: 0,
       timeout: 0,
     };
     const uri_id = btoa(domain).replace(/=/g, "");    

     await axios
       .get(`${DATA_ANALYSIS_ENDPOINT_URL}${uri_id}`, {
         headers: {
           "x-apikey": DATA_ANALYSIS_ENDPOINT_API_KEY,
         },
       })
       .then((res) => {
         console.log(res.data.data.attributes.last_analysis_stats);
         analysisStats = { ...res.data.data.attributes.last_analysis_stats };
       })
       .catch((err) => {
        throw new Error(err);
       })

       return analysisStats;
      
}