export default {
  logo: (
    <>
      <img src="/logo.png" style={{ width: 42, height: 42 }} />
      <div
        style={{
          height: 42,
          display: "flex",
          flexDirection: "column",
          marginLeft: 8,
          justifyContent: "center",
        }}
      >
        <span
          style={{
            fontSize: "1.2rem",
            fontWeight: "600",
            lineHeight: "1.2rem",
          }}
        >
          UniHand
        </span>
        <small style={{ fontSize: "0.7rem" }}>Documentation</small>
      </div>
    </>
  ),
  project: {
    link: "https://github.com/TVU-OPS/UniHand",
  },
  head: (
    <>
      <title>UniHand Documentation</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="UniHand Documentation" />
      <meta
        property="og:description"
        content="Tài liệu hệ thống UniHand hỗ trợ nhân đạo đại dịch, thiên tai"
      />
      <meta property="og:image" content="/logo.png" />
      <link rel="icon" href="/logo.png" />
    </>
  ),
  banner: {
    key: "1.0-release",
    content: (
      <a href="https://github.com/TVU-OPS/UniHand" target="_blank">
        🎉 UniHand 1.0 is released. Read more →
      </a>
    ),
  },
  editLink: {
    component: null,
  },
  feedback: {
    useLink: () =>
      "https://github.com/TVU-OPS/UniHand/issues/new?title=Feedback for “UniHand”&labels=feedback&description=Your feedback will be used to improve UniHand.",
  },
  footer: {
    content: (
      <span>
        MIT {new Date().getFullYear()} ©{" "}
        <a href="https://unihand.org.vn" target="_blank">
          UniHand
        </a>
        .
      </span>
    ),
  },
};
