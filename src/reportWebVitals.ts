type ReportCallback = (metric: { name: string; value: number; delta?: number }) => void;

const reportWebVitals = (onPerfEntry?: ReportCallback) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then((vitals) => {
      vitals.onCLS(onPerfEntry);
      vitals.onFCP(onPerfEntry);
      vitals.onINP(onPerfEntry);
      vitals.onLCP(onPerfEntry);
      vitals.onTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
