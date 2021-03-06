import { EvaluatedFlags } from './evaluatedflags';
import { Impression } from './impression/impression';
import { Preference } from './preference/preference';
import { CumulatedStatistic } from './statistic/cumulatedstatistic';
import { Statistic } from './statistic/statistic';
import { Metadata, Repertoire } from './storage';

export interface CreateRepertoireRequest {}

export interface CreateRepertoireResponse {
  newRepertoireId: string
}

export interface DeleteRepertoireRequest {
  repertoireId: string
}

export interface DeleteRepertoireResponse {}

export interface EvaluateFlagsRequest {}

export interface EvaluateFlagsResponse {
  evaluatedFlags: EvaluatedFlags
}

export interface GetPreferenceRequest {}

export interface GetPreferenceResponse {
  preference: Preference
}

export interface LogImpressionsRequest {
  impressions: Impression[]
}

export interface LogImpressionsResponse {}

export interface LoadRepertoireRequest {
  repertoireId: string
}

export interface LoadRepertoireResponse {
  repertoire: Repertoire
}

export interface LoadCumulatedStatisticsRequest {
  repertoireId: string
}

export interface LoadCumulatedStatisticsResponse {
  cumulatedStatisticList: CumulatedStatistic[]
}

export interface MetadataRequest {}

export interface MetadataResponse {
  metadataList: Metadata[]
}

export interface PrivelegedCopyRequest {
  repertoireId: string
}

export interface PrivelegedCopyResponse {}

export interface RecordStatisticsRequest {
  statisticList: Statistic[]
}

export interface RecordStatisticsResponse {}

export interface SetPreferenceRequest {
  preference: Preference
}

export interface SetPreferenceResponse {}

export interface UpdateRepertoireRequest {
  repertoireId: string,
  repertoire: Repertoire
}

export interface UpdateRepertoireResponse {}
