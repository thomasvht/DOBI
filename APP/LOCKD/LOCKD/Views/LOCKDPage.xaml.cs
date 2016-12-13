using System;
using Xamarin.Forms;

namespace LOCKD
{
	public partial class LOCKDPage : ContentPage
	{
		bool state;
		string stateText = "";

		public LOCKDPage()
		{
			InitializeComponent();
			state = true;
			btnState.Image = "lockd.png";
			stateScreenlbl.Text = "Your bike is LOCK'D";
		}

		void Button_OnClicked(object sender, EventArgs e)
		{
			
			if (state == false)
			{
				state = true;
				stateText = "Your bike is LOCK'D";
				stateScreenlbl.Text = stateText;
				btnState.Image = "lockd.png";
			}
			else if (state == true)
			{
				state = false;
				stateText = "Your bike is UNLOCK'D";
				stateScreenlbl.Text = stateText;
				btnState.Image = "unlockd.png";
			}

		}
	}
}
