console.log("### Dates & Times ###");

let d;

// d = new Date();

// d = d.toString();

d = new Date(2021, 0, 10, 12, 30, 0);

d = new Date("2021-07-10T12:30:00");
d = new Date("07/10/2021 12:30:00");
d = new Date("2022-07-10");
d = new Date("07-10-2022 12:30:00");

d = new Date();

d = d.getTime();
d = d.valueOf();

d = new Date(1766139890420);

d = Math.floor(Date.now() / 1000); // Timestamps in seconds

let x;
let y = new Date("12/20/2025");

x = y.toString();

x = y.getTime();
x = y.valueOf();

x = y.getFullYear();
x = y.getMonth() + 1;
x = y.getDate();

x = y.getHours();
x = y.getMinutes();
x = y.getSeconds();
x = y.getMilliseconds();

x = `${y.getFullYear()}-${y.getMonth() + 1}-${y.getDate()}`;

x = Intl.DateTimeFormat("ko-KR").format(y);
x = Intl.DateTimeFormat("default").format(y);
x = Intl.DateTimeFormat("en-US").format(y);

x = Intl.DateTimeFormat("default", { month: "long" }).format(y);

x = y.toLocaleString("default", { month: "short" });

x = y.toLocaleString("en-US", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  timeZone: "Asia/Seoul",
});

console.log(x);
