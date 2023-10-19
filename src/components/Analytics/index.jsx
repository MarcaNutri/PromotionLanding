import React from "react";

const Analytics = () => (
  <>
    <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.PUBLIC_GA_KEY}`}></script>
    <script dangerouslySetInnerHTML={{
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', '${process.env.PUBLIC_GA_KEY}');
      `
    }} />
  </>
);

export default Analytics;
