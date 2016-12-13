using System;
using System.Collections.Generic;
using System.Linq;

using Foundation;
using ImageCircle.Forms.Plugin.iOS;
using UIKit;
using Xamarin;
using Xamarin.Forms;

namespace LOCKD.iOS
{
	[Register("AppDelegate")]
	public partial class AppDelegate : Xamarin.Forms.Platform.iOS.FormsApplicationDelegate
	{
		public override bool FinishedLaunching(UIApplication app, NSDictionary options)
		{
			Forms.Init();
			FormsMaps.Init();
			ImageCircleRenderer.Init();

			LoadApplication(new App());

			return base.FinishedLaunching(app, options);
		}
	}
}
