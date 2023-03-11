const joinedLogger = (level, seperator) => {
  const f = (...messages) => {
    let joinedMessage = "";
    messages.map((message) => {
      if (message.level >= level) {
        joinedMessage += message.value + seperator;
      }
    });
    joinedMessage.slice(0, -1);
    console.log(joinedMessage);
  };
  return f;
};

const f = joinedLogger(10, ",");

f(
  { level: 15, value: "test" },
  { level: 10, value: "yes" },
  { level: 3, value: "no" }
);
