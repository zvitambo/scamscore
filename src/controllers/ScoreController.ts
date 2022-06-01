import { RequestHandler } from "express";
import { CreateDomainInput, CreateLastAnalysisStatsInput} from '../dto';
import { CheckIsValidDomain } from '../utility';
import { getLastAnalysisStats } from './StatsController';
import { insertScamScore, getScamScoreTrend } from "../persistence/controllers";




export const calculateScamScore: RequestHandler = async (req, res, next) => {
     try {
        
        const { domainname, timeRange } = <CreateDomainInput>req.body;
        if (domainname.length < 0 || !CheckIsValidDomain(domainname)) return res.status(400).json(`Invalid domain name ${domainname}`);
        const requestTime = new Date();
        
        const {harmless,  malicious, suspicious,  undetected,  timeout} = await getLastAnalysisStats(domainname);

        const scamscore: number = (100 / (harmless - undetected - timeout)) * (malicious + suspicious);
       
        await insertScamScore(domainname, scamscore, requestTime);

        if (timeRange !== undefined){
          const scamscoretrend = await getScamScoreTrend(domainname, timeRange);
          return res.status(200).json({ scamscore: scamscore, scamscoretrend: scamscoretrend });
        }
        
        return res.status(200).json({ scamscore: scamscore });
       
     } catch (error) {
      throw error;   
     }
};



export const getScamScore: RequestHandler = async (req, res, next) => {
  try {
    const { domainname, timeRange } = <CreateDomainInput>req.body;
    if (domainname.length < 0 || !CheckIsValidDomain(domainname))
      return res.status(400).json(`Invalid domain name ${domainname}`);    

    const scamscoretrend = await getScamScoreTrend(domainname, timeRange);
    return res.status(200).json({ scamscoretrend: scamscoretrend });

  } catch (error) {
     throw error;   
  }
};

