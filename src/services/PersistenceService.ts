import {pool } from "../persistence/config";





export const insertScamScore = async (
  domainname: string,
  scamscore: number,
  requestTime: Date
) => {
  try {
    await pool.query(
      `INSERT INTO scamscores (domainname, scamscore, createddate) VALUES ($1, $2, $3) `,
      [domainname, scamscore, requestTime]
    );
  } catch (error) {
    throw error;    
  }
 
}; 


export const getScamScoreTrend = async (
  domainname: string,
  timerange: string
) => {
  try {

    const range = timerange.split(" ");
   
    const scamscorerange = await pool.query(
      `SELECT domainname, scamscore, createddate as RequestTime FROM scamscores WHERE domainname = ($1) AND ( createddate >= ($2) AND createddate <=  ($3))`,
      [domainname, range[0], range[1]]
    );   

    
    return scamscorerange.rows;
  } catch (error) {
    throw error;   
  }
}; 