import "babel-polyfill";
import "./style.css";
import "./index.html";
import other from "./other.js";
document.write("It works.");
document.write(other);
//webpack-dev-server --inline --watch --hot
