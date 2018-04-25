﻿using OptionsPlay.TechnicalAnalysis.Entities;

namespace OptionsPlay.BusinessLogic.Common.Entities
{
	public class CoveredCall
	{
		public double Premium { get; set; }

		public double Return { get; set; }


		public string OptionNumber { get; set; }


		public double Probability { get; set; }

		public double ProbabilityInSigmas { get; set; }

		public RiskTolerance RiskTolerance { get; set; }


		//public bool HasEarnings { get; set; }

		//public double DaysQuantityBeforeEarnings { get; set; }

		//public double VolOfVol { get; set; }


		public double PercentAboveBelowCurrentPrice { get; set; }

		public int NumberOfStrikesBelowAboveCurrentPrice { get; set; }

		public double NumberOfSdBelowAboveCurrentPrice { get; set; }
	}
}