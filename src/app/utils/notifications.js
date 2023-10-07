import OneSignal from "react-onesignal";

export default async function runOneSignal() {
  try {
    await OneSignal.init({
      appId: "d8d1e2b5-3091-488e-a256-060fb67c0748",
      allowLocalhostAsSecureOrigin: true,
    });
    OneSignal.Slidedown.promptPush();
  } catch (error) {
    console.error(error);
  }
}
