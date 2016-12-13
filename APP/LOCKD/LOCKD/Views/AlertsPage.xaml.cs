using System;
using System.Collections.Generic;

using Xamarin.Forms;

namespace LOCKD
{
	public partial class AlertsPage : ContentPage
	{
		public AlertsPage()
		{
			InitializeComponent();
			stckLayoutAlerts.Margin = new Thickness(10, 0, 10, 0);
			/* SECTION MOVED */
			stckLayoutMoved.Orientation = StackOrientation.Vertical;

			lblMoved.Text = "MOVED";

			stckLayoutWhen.Orientation = StackOrientation.Horizontal;

			lblWhen.Text = "WHEN";
			lblWhen.FontAttributes = FontAttributes.Bold;

			lblWhenAnswer.Text = "02/12/2016 10:25";

			stckLayoutWhere.Orientation = StackOrientation.Horizontal;

			lblWhere.Text = "WHERE";
			lblWhere.FontAttributes = FontAttributes.Bold;

			lblWhereAnswer.Text = "Leiestraat 33";

			/* SECTION STOLEN */
			stckLayoutStolen.Orientation = StackOrientation.Vertical;

			lblStolen.Text = "STOLEN";

			stckLayoutWhenS.Orientation = StackOrientation.Horizontal;

			lblWhenS.Text = "WHEN";
			lblWhenS.FontAttributes = FontAttributes.Bold;

			lblWhenAnswerS.Text = "02/12/2016 10:30";

			stckLayoutWhereS.Orientation = StackOrientation.Horizontal;

			lblWhereS.Text = "WHERE";
			lblWhereS.FontAttributes = FontAttributes.Bold;

			lblWhereAnswerS.Text = "Leiestraat 33, 8500";

			stckLayoutStopped.Orientation = StackOrientation.Horizontal;

			lblStopped.Text = "STOPPED";
			lblStopped.FontAttributes = FontAttributes.Bold;

			lblStoppedAnswer.Text = "02/12/2016 11:03";

			stckLayoutLocation.Orientation = StackOrientation.Horizontal;

			lblLocation.Text = "LOCATION";
			lblLocation.FontAttributes = FontAttributes.Bold;

			lblLocationAnswer.Text = "Magdalenastraat 16, 8500";
		}
	}
}
