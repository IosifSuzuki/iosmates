export async function isGeolocationAvailable() {
  if (!('geolocation' in navigator)) {
    return false;
  }
  try {
    await getClientPosition({
      timeout: 1000,
    });
  } catch {
    return false;
  }

  return true;
}

export function getClientPosition(options) {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
}
