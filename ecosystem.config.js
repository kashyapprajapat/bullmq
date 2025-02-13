module.exports = {
    apps: [
      {
        name: "server",
        script: "server.js",
        instances: 1,
        exec_mode: "fork"
      },
      {
        name: "worker",
        script: "worker.js",
        instances: 1,
        exec_mode: "fork"
      }
    ]
  };
  