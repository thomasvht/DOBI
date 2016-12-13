using System;

using Android.App;
using Android.Content;
using Android.Content.PM;
using Android.Runtime;
using Android.Views;
using Android.Widget;
using Android.OS;
using Xamarin;
using Xamarin.Forms;
using Xamarin.Forms.Maps;
using ImageCircle.Forms.Plugin.Droid;

namespace LOCKD.Droid
{
	[Activity(Label = "LOCKD.Droid", Icon = "@drawable/lockd", Theme = "@style/MyTheme", MainLauncher = true, ConfigurationChanges = ConfigChanges.ScreenSize | ConfigChanges.Orientation)]
	public class MainActivity : Xamarin.Forms.Platform.Android.FormsAppCompatActivity
	{
		protected override void OnCreate(Bundle savedInstanceState)
		{
			TabLayoutResource = Resource.Layout.Tabbar;
			ToolbarResource = Resource.Layout.Toolbar;

			base.OnCreate(savedInstanceState);

			Forms.Init(this, savedInstanceState);
			FormsMaps.Init(this, savedInstanceState);
			ImageCircleRenderer.Init();

			LoadApplication(new App());
		}
	}
}
