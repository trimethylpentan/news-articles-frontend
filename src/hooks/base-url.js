// Dieser Hook dient dazu, die Base-Url zu kapseln. Die Base-Url wird über eine ENV-Variable konfiguriert

export function useBaseUrl(): string {
  return process.env.REACT_APP_BACKEND_BASE_URL;
}
