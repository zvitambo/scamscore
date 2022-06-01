export interface CreateLastAnalysisStatsInput {
  harmless: number;
  malicious: number;
  suspicious: number;
  undetected: number;
  timeout: number;
}
