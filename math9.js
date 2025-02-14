
// Get references to input fields
const v1Input   = document.getElementById("v1");
const av1Input  = document.getElementById("av1");
const av2Input  = document.getElementById("av2");
const x1Input   = document.getElementById("x1");
const ax1Input  = document.getElementById("ax1");
const ax2Input  = document.getElementById("ax2");
const opInput   = document.getElementById("op");
const aopInput  = document.getElementById("aop");
const updateButton = document.getElementById("updateButton");

// Get references to output elements
const pa = document.getElementById("pa");
const pb = document.getElementById("pb");
const pc = document.getElementById("pc");
const pd = document.getElementById("pd");
const pe = document.getElementById("pe");
const aa = document.getElementById("aa");
const ab = document.getElementById("ab");
const ac = document.getElementById("ac");
const ad = document.getElementById("ad");
const ae = document.getElementById("ae");

function updateVariables() {
  // Read user input values
  const v1  = v1Input.value;
  const av1 = av1Input.value;
  const av2 = av2Input.value;
  const x1  = parseFloat(x1Input.value);
  const ax1 = parseFloat(ax1Input.value);
  const ax2 = parseFloat(ax2Input.value);
  const op  = opInput.value;
  const aop = aopInput.value;
  
  // Complementary operators
  const opO  = (op === '+')  ? '-' : '+';
  const aopO = (aop === '+') ? '-' : '+';
  
  // Derived variables
  const v2  = `\\frac{1}{${v1}}`;
  const v22 = `\\frac{1}{${v1}^2}`;
  const v23 = `\\frac{1}{${v1}^3}`;
  const v24 = `\\frac{1}{${v1}^4}`;
  const v25 = `\\frac{1}{${v1}^5}`;
  const v26 = `\\frac{1}{${v1}^6}`;
  
  // Common strings used in expressions
  const tx1   = `\\textcolor{#076e5d}{\\text{@ }}`;
  const c     = `\\textcolor{limegreen}{\\implies}`;
  const d     = `\\textcolor{blue}{\\therefore}`;
  const e     = `\\textcolor{#a15be2}{=}`;
  const and   = `\\textcolor{#8f5810}{\\text{ and }}`;
  const given = `\\textcolor{#8f5810}{\\text{Given:}}`;
  const here  = `\\textcolor{#8f5810}{\\text{Here,}}`;
  const again = `\\textcolor{#8f5810}{\\text{Again,}}`;
  const now   = `\\textcolor{#8f5810}{Now,}`;
  
  // ----- gga() -----
  let xx1 = x1 * x1 - 2;
  let xx2 = x1 * x1 + 2;
  let xxx = (op === '+') ? xx1 : xx2;
  
  pa.innerHTML = `\\(${tx1}${v1}${op}${v2}${e}${x1}; ${v1}^2+${v22}${e}?\\)<br>
                  \\(${given}\\)<br>
                  \\(${v1}${op}\\frac{1}{${v1}}${e}${x1}\\)<br><br>
                  \\(${c}\\left(${v1}${op}\\frac{1}{${v1}}\\right)^2${e}(${x1})^2\\)<br><br>
                  \\(${c}(${v1})^2+\\left(\\frac{1}{${v1}}\\right)^2${op}2.${v1}.\\frac{1}{${v1}}${e}${x1*x1}\\)<br><br>
                  \\(${c}${v1}^2+\\frac{1}{${v1}^2}${op}2${e}${x1*x1}\\)<br><br>
                  \\(${c}${v1}^2+\\frac{1}{${v1}^2}${e}${x1*x1}${opO}2\\)<br><br>
                  \\(${d}${v1}^2+\\frac{1}{${v1}^2}${e}${xxx}\\)`;
  
  // ----- ggb() -----
  let yy1 = x1 * x1 * x1 - 3 * x1;
  let yy2 = x1 * x1 * x1 + 3 * x1;
  let yyy = (op === '+') ? yy1 : yy2;
  
  pb.innerHTML = `\\(${tx1}${v1}${op}${v2}${e}${x1}; ${v1}^3${op}${v23}${e}?\\)<br>
                  \\(${given}\\)<br>
                  \\(${v1}${op}\\frac{1}{${v1}}${e}${x1}\\)<br><br>
                  \\(${c}\\left(${v1}${op}\\frac{1}{${v1}}\\right)^3${e}(${x1})^3\\)<br><br>
                  \\(${c}(${v1})^3${op}\\left(\\frac{1}{${v1}}\\right)^3${op}3.${v1}.\\frac{1}{${v1}}.(${v1}${op}\\frac{1}{${v1}})${e}${x1*x1*x1}\\)<br><br>
                  \\(${c}${v1}^3${op}\\frac{1}{${v1}^3}${op}3.1.${x1}${e}${x1*x1*x1}\\)<br><br>
                  \\(${c}${v1}^3${op}\\frac{1}{${v1}^3}${e}${x1*x1*x1}${opO}${3*x1}\\)<br><br>
                  \\(${d}${v1}^3${op}\\frac{1}{${v1}^3}${e}${yyy}\\)`;
  
  // ----- ggc() -----
  let xxx_ggc = (op === '+') ? xx1 : xx2;
  pc.innerHTML = `\\(${tx1}${v1}${op}${v2}${e}${x1}; ${v1}^4+${v24}${e}?\\)<br>
                  \\(${given}\\)<br>
                  \\(${v1}${op}\\frac{1}{${v1}}${e}${x1}\\)<br><br>
                  \\(${c}\\left(${v1}${op}\\frac{1}{${v1}}\\right)^2${e}(${x1})^2\\)<br><br>
                  \\(${c}(${v1})^2+\\left(\\frac{1}{${v1}}\\right)^2${op}2.${v1}.\\frac{1}{${v1}}${e}${x1*x1}\\)<br><br>
                  \\(${c}${v1}^2+\\frac{1}{${v1}^2}${op}2${e}${x1*x1}\\)<br><br>
                  \\(${c}${v1}^2+\\frac{1}{${v1}^2}${e}${x1*x1}${opO}2\\)<br><br>
                  \\(${c}${v1}^2+\\frac{1}{${v1}^2}${e}${xxx_ggc}\\)<br><br>
                  \\(${c}\\left(${v1}^2+\\frac{1}{${v1}^2}\\right)^2${e}(${xxx_ggc})^2\\)<br><br>
                  \\(${c}(${v1}^2)^2+\\left(\\frac{1}{${v1}^2}\\right)^2+2.${v1}^2.\\frac{1}{${v1}^2}${e}${xxx_ggc*xxx_ggc}\\)<br><br>
                  \\(${c}${v1}^4+\\frac{1}{${v1}^4}+2${e}${xxx_ggc*xxx_ggc}\\)<br><br>
                  \\(${c}${v1}^4+\\frac{1}{${v1}^4}${e}${xxx_ggc*xxx_ggc}-2\\)<br><br>
                  \\(${d}${v1}^4+\\frac{1}{${v1}^4}${e}${xxx_ggc*xxx_ggc-2}\\)`;
  
  // ----- ggd() -----
  let xxx_ggd = (op === '+') ? xx1 : xx2;
  let yyy_ggd = (op === '+') ? yy1 : yy2;
  pd.innerHTML = `\\(${tx1}${v1}${op}${v2}${e}${x1}; ${v1}^5${op}${v25}${e}?\\)<br>
                  \\(${given}\\)<br>
                  \\(${v1}${op}\\frac{1}{${v1}}${e}${x1}\\)<br><br>
                  \\(${c}\\left(${v1}${op}\\frac{1}{${v1}}\\right)^2${e}(${x1})^2\\)<br><br>
                  \\(${c}(${v1})^2+\\left(\\frac{1}{${v1}}\\right)^2${op}2.${v1}.\\frac{1}{${v1}}${e}${x1*x1}\\)<br><br>
                  \\(${c}${v1}^2+\\frac{1}{${v1}^2}${op}2${e}${x1*x1}\\)<br><br>
                  \\(${c}${v1}^2+\\frac{1}{${v1}^2}${e}${x1*x1}${opO}2\\)<br><br>
                  \\(${c}${v1}^2+\\frac{1}{${v1}^2}${e}${xxx_ggd}\\)<br><br>
                  \\(${again}\\)<br>
                  \\(${v1}${op}\\frac{1}{${v1}}${e}${x1}\\)<br><br>
                  \\(${c}\\left(${v1}${op}\\frac{1}{${v1}}\\right)^3${e}(${x1})^3\\)<br><br>
                  \\(${c}(${v1})^3${op}\\left(\\frac{1}{${v1}}\\right)^3${op}3.${v1}.\\frac{1}{${v1}}\\,(${v1}${op}\\frac{1}{${v1}})${e}${x1*x1*x1}\\)<br><br>
                  \\(${c}${v1}^3${op}\\frac{1}{${v1}^3}${op}3.${x1}${e}${x1*x1*x1}\\)<br><br>
                  \\(${c}${v1}^3${op}\\frac{1}{${v1}^3}${e}${x1*x1*x1}${opO}${3*x1}\\)<br><br>
                  \\(${c}${v1}^3${op}\\frac{1}{${v1}^3}${e}${yyy_ggd}\\)<br>
                  \\(${now} \\)<br>
                  \\((${v1}^3${op}\\frac{1}{${v1}^3})(${v1}^2+\\frac{1}{${v1}^2})
                     ${e}${yyy_ggd}.${xxx_ggd} \\)<br><br>
                  \\(${c}${v1}^5+${v1}^3.\\frac{1}{${v1}^2}${op}\\frac{1}{${v1}^3}.${v1}^2${op}
                     \\frac{1}{${v1}^5}${e}${yyy_ggd*xxx_ggd} \\)<br><br>
                  \\(${c}${v1}^5${op}\\frac{1}{${v1}^5}+${v1}${op}\\frac{1}{${v1}}${e}${yyy_ggd*xxx_ggd} \\)<br><br>
                  \\(${c}${v1}^5${op}\\frac{1}{${v1}^5}+${x1}${e}${yyy_ggd*xxx_ggd} \\)<br><br>
                  \\(${c}${v1}^5${op}\\frac{1}{${v1}^5}${e}${yyy_ggd*xxx_ggd}-${x1} \\)<br><br>
                  \\(${d}${v1}^5${op}\\frac{1}{${v1}^5}${e}${yyy_ggd*xxx_ggd-x1} \\)<br><br>
                  `;
  
  // ----- gge() -----
  let xxx_gge = (op === '+') ? xx1 : xx2;
  pe.innerHTML = `\\(${tx1}${v1}${op}${v2}${e}${x1}; ${v1}^6+${v26}${e}?\\)<br>
                  \\(${given}\\)<br>
                  \\(${v1}${op}\\frac{1}{${v1}}${e}${x1}\\)<br><br>
                  \\(${c}\\left(${v1}${op}\\frac{1}{${v1}}\\right)^2${e}(${x1})^2\\)<br><br>
                  \\(${c}(${v1})^2+\\left(\\frac{1}{${v1}}\\right)^2${op}2.${v1}.\\frac{1}{${v1}}${e}${x1*x1}\\)<br><br>
                  \\(${c}${v1}^2+\\frac{1}{${v1}^2}${op}2${e}${x1*x1}\\)<br><br>
                  \\(${c}${v1}^2+\\frac{1}{${v1}^2}${e}${x1*x1}${opO}2\\)<br><br>
                  \\(${c}${v1}^2+\\frac{1}{${v1}^2}${e}${xxx_gge}\\)<br><br>
                  \\(${c}\\left(${v1}^2+\\frac{1}{${v1}^2}\\right)^3${e}(${xxx_gge})^3\\)<br><br>
                  \\(${c}(${v1}^2)^3+\\left(\\frac{1}{${v1}^2} \\right)^3+3.${v1}^2.\\frac{1}{${v1}^2}.\\left(${v1}^2+\\frac{1}{${v1}^2}\\right)
                  ${e}${xxx_gge*xxx_gge*xxx_gge}\\)<br><br>
                  \\(${c}${v1}^6+\\frac{1}{${v1}^6}+3.${xxx_gge}${e}${xxx_gge*xxx_gge*xxx_gge}\\)<br><br>
                  \\(${c}${v1}^6+\\frac{1}{${v1}^6}${e}${xxx_gge*xxx_gge*xxx_gge}-${3*xxx_gge}\\)<br><br>
                  \\(${d}${v1}^6+\\frac{1}{${v1}^6}${e}${xxx_gge*xxx_gge*xxx_gge-3*xxx_gge}\\)`;
  
  // ----- ffa() -----
  let axx1 = ax1 * ax1;
  let axxx = (aop === '+') ? axx1 - 2 * ax2 : axx1 + 2 * ax2;
  aa.innerHTML = `\\(${tx1}${av1}${aop}${av2}${e}${ax1}${and}${av1}${av2}${e}${ax2}; 
                  ${av1}^2+${av2}^2${e}?\\)<br>
                  \\(${given}\\)<br>
                  \\(${av1}${aop}${av2}${e}${ax1}${and}${av1}${av2}${e}${ax2}\\)<br>
                  \\(${here}\\)<br>
                  \\(${av1}${aop}${av2}${e}${ax1}\\)<br>
                  \\(${c}\\left(${av1}${aop}${av2}\\right)^2${e}(${ax1})^2\\)<br>
                  \\(${c}(${av1})^2+(${av2})^2${aop}2.${av1}\\,${av2}${e}${axx1}\\)<br>
                  \\(${c}${av1}^2+${av2}^2${aop}2.${ax2}${e}${axx1}\\)<br>
                  \\(${c}${av1}^2+${av2}^2${e}${axx1}${aopO}${2*ax2}\\)<br>
                  \\(${d}${av1}^2+${av2}^2${e}${axxx}\\)`;
  
  // ----- ffb() -----
  let axx1_ffb = ax1 * ax1 * ax1;
  let axxx_ffb = (aop === '+') ? axx1_ffb - 3 * ax1 * ax2 : axx1_ffb + 3 * ax1 * ax2;
  ab.innerHTML = `\\(${tx1}${av1}${aop}${av2}${e}${ax1}${and}${av1}${av2}${e}${ax2}; 
                  ${av1}^3${aop}${av2}^3${e}?\\)<br>
                  \\(${given}\\)<br>
                  \\(${av1}${aop}${av2}${e}${ax1}${and}${av1}${av2}${e}${ax2}\\)<br>
                  \\(${here}\\)<br>
                  \\(${av1}${aop}${av2}${e}${ax1}\\)<br>
                  \\(${c}\\left(${av1}${aop}${av2}\\right)^3${e}(${ax1})^3\\)<br>
                  \\(${c}(${av1})^3${aop}(${av2})^3${aop}3.${av1}\\,${av2}\\,\\left(${av1}${aop}${av2}\\right)
                  ${e}${axx1_ffb}\\)<br>
                  \\(${c}${av1}^3${aop}${av2}^3${aop}3.${ax2}\\,${ax1}${e}${axx1_ffb}\\)<br>
                  \\(${c}${av1}^3${aop}${av2}^3${e}${axx1_ffb}${aopO}${3*ax1*ax2}\\)<br>
                  \\(${d}${av1}^3${aop}${av2}^3${e}${axxx_ffb}\\)`;
  
  // ----- ffc() -----
  let axx1_ffc = ax1 * ax1;
  let axxx_ffc = (aop === '+') ? axx1_ffc - 2 * ax2 : axx1_ffc + 2 * ax2;
  ac.innerHTML = `\\(${tx1}${av1}${aop}${av2}${e}${ax1}${and}${av1}${av2}${e}${ax2}; 
                  ${av1}^4+${av2}^4${e}?\\)<br>
                  \\(${given}\\)<br>
                  \\(${av1}${aop}${av2}${e}${ax1}${and}${av1}${av2}${e}${ax2}\\)<br>
                  \\(${here}\\)<br>
                  \\(${av1}${aop}${av2}${e}${ax1}\\)<br>
                  \\(${c}\\left(${av1}${aop}${av2}\\right)^2${e}(${ax1})^2\\)<br>
                  \\(${c}(${av1})^2+(${av2})^2${aop}2.${av1}.${av2}${e}${axx1_ffc}\\)<br>
                  \\(${c}${av1}^2+${av2}^2${aop}2.${ax2}${e}${axx1_ffc}\\)<br>
                  \\(${c}${av1}^2+${av2}^2${e}${axx1_ffc}${aopO}${2*ax2}\\)<br>
                  \\(${c}${av1}^2+${av2}^2${e}${axxx_ffc}\\)<br>
                  \\(${c}\\left(${av1}^2+${av2}^2\\right)^2${e}${axxx_ffc}^2\\)<br>
                  \\(${c}(${av1}^2)^2+(${av2}^2)^2+2.${av1}^2.${av2}^2${e}${axxx_ffc*axxx_ffc}\\)<br>
                  \\(${c}${av1}^4+${av2}^4+2.\\left(${av1}${av2}\\right)^2${e}${axxx_ffc*axxx_ffc}\\)<br>
                  \\(${c}${av1}^4+${av2}^4+2.\\left(${ax2}\\right)^2${e}${axxx_ffc*axxx_ffc}\\)<br>
                  \\(${c}${av1}^4+${av2}^4${e}${axxx_ffc*axxx_ffc}-${2*ax2*ax2}\\)<br>
                  \\(${d}${av1}^4+${av2}^4${e}${axxx_ffc*axxx_ffc-2*ax2*ax2}\\)`;
  
  // ----- ffd() -----
  let axx1_ffd = ax1 * ax1;
  let ayy1_ffd = ax1 * ax1 * ax1;
  let axxx_ffd, ayyy_ffd;
  if (aop === '+') {
    axxx_ffd = axx1_ffd - 2 * ax2;
    ayyy_ffd = ayy1_ffd - 3 * ax1 * ax2;
  } else {
    axxx_ffd = axx1_ffd + 2 * ax2;
    ayyy_ffd = ayy1_ffd + 3 * ax1 * ax2;
  }
  ad.innerHTML = `\\(${tx1}${av1}${aop}${av2}${e}${ax1}${and}${av1}${av2}${e}${ax2}; 
                  ${av1}^5${aop}${av2}^5${e}?\\)<br>
                  \\(${given}\\)<br>
                  \\(${av1}${aop}${av2}${e}${ax1}${and}${av1}${av2}${e}${ax2}\\)<br>
                  \\(${here}\\)<br>
                  \\(${av1}${aop}${av2}${e}${ax1}\\)<br>
                  \\(${c}\\left(${av1}${aop}${av2}\\right)^2${e}(${ax1})^2\\)<br>
                  \\(${c}(${av1})^2+(${av2})^2${aop}2.${av1}${av2}${e}${axx1_ffd}\\)<br>
                  \\(${c}${av1}^2+${av2}^2${aop}2.${ax2}${e}${axx1_ffd}\\)<br>
                  \\(${c}${av1}^2+${av2}^2${e}${axx1_ffd}${aopO}${2*ax2}\\)<br>
                  \\(${c}${av1}^2+${av2}^2${e}${axxx_ffd}\\)<br>
                  \\(${again}\\)<br>
                  \\(${av1}${aop}${av2}${e}${ax1}\\)<br>
                  \\(${c}\\left(${av1}${aop}${av2}\\right)^3${e}(${ax1})^3\\)<br>
                  \\(${c}(${av1})^3${aop}(${av2})^3${aop}3.${av1}${av2}\\left(${av1}${aop}${av2}\\right)
                  ${e}${ayy1_ffd}\\)<br>
                  \\(${c}\\,${av1}^3${aop}${av2}^3${aop}3.${ax2}${ax1}${e}${ayy1_ffd}\\)<br>
                  \\(${c}\\,${av1}^3${aop}${av2}^3${e}${ayy1_ffd}${aopO}${3*ax1*ax2}\\)<br>
                  \\(${c}\\,${av1}^3${aop}${av2}^3${e}${ayyy_ffd}\\)<br>
                  \\(${now}\\)<br>
                  \\((${av1}^3${aop}${av2}^3)\\,\\left(${av1}^2+${av2}^2\\right)
                  ${e}${ayyy_ffd}\\cdot${axxx_ffd}\\)<br>
                  \\(${c}${av1}^5+${av1}^3\\,${av2}^2${aop}${av1}^2\\,${av2}^3${aop}${av2}^5${e}${ayyy_ffd*axxx_ffd}\\)<br>
                  \\(${c}${av1}^5${aop}${av2}^5+${av1}^2\\,${av2}^2\\,\\left(${av1}${aop}${av2}\\right)
                  ${e}${ayyy_ffd*axxx_ffd}\\)<br>
                  \\(${c}${av1}^5${aop}${av2}^5+\\left(${av1}${av2}\\right)^2\\,\\left(${av1}${aop}${av2}\\right)
                  ${e}${ayyy_ffd*axxx_ffd}\\)<br>
                  \\(${c}${av1}^5${aop}${av2}^5+\\left(${ax2}\\right)^2\\,\\left(${ax1}\\right)
                  ${e}${ayyy_ffd*axxx_ffd}\\)<br>
                  \\(${c}${av1}^5${aop}${av2}^5${e}${ayyy_ffd*axxx_ffd}-${ax2*ax2*ax1}\\)<br>
                  \\(${c}${av1}^5${aop}${av2}^5${e}${ayyy_ffd*axxx_ffd-ax2*ax2*ax1}\\)`;
  
  // ----- ffe() -----
  let axx1_ffe = ax1 * ax1;
  let axxx_ffe = (aop === '+') ? axx1_ffe - 2 * ax2 : axx1_ffe + 2 * ax2;
  ae.innerHTML = `\\(${tx1}${av1}${aop}${av2}${e}${ax1}${and}${av1}${av2}${e}${ax2}; 
                  ${av1}^6+${av2}^6${e}?\\)<br>
                  \\(${given}\\)<br>
                  \\(${av1}${aop}${av2}${e}${ax1}${and}${av1}${av2}${e}${ax2}\\)<br>
                  \\(${here}\\)<br>
                  \\(${av1}${aop}${av2}${e}${ax1}\\)<br>
                  \\(${c}\\,\\left(${av1}${aop}${av2}\\right)^2${e}(${ax1})^2\\)<br>
                  \\(${c}\\,(${av1})^2+(${av2})^2${aop}2.${av1}\\,${av2}${e}${axx1_ffe}\\)<br>
                  \\(${c}\\,${av1}^2+${av2}^2${aop}2.${ax2}${e}${axx1_ffe}\\)<br>
                  \\(${c}\\,${av1}^2+${av2}^2${e}${axx1_ffe}${aopO}${2*ax2}\\)<br>
                  \\(${c}\\,${av1}^2+${av2}^2${e}${axxx_ffe}\\)<br>
                  \\(${c}\\,\\left(${av1}^2+${av2}^2\\right)^3${e}(${axxx_ffe})^3\\)<br>
                  \\(${c}\\,(${av1}^2)^3+(${av2}^2)^3+3.${av1}^2\\,${av2}^2\\,\\left(${av1}^2+${av2}^2\\right)
                  ${e}${axxx_ffe*axxx_ffe*axxx_ffe}\\)<br>
                  \\(${c}\\,${av1}^6+${av2}^6+3.\\left(${av1}${av2}\\right)^2\\,\\left(${av1}^2+${av2}^2\\right)
                  ${e}${axxx_ffe*axxx_ffe*axxx_ffe}-${3*ax2*ax2*axxx_ffe}\\)<br>
                  \\(${d}\\,${av1}^6+${av2}^6${e}${axxx_ffe*axxx_ffe*axxx_ffe-3*ax2*ax2*axxx_ffe}\\)`;

    waitForKatexdddd();
}

function waitForKatexdddd() {
    if (typeof renderMathInElement !== "undefined") {
        renderMathInElement(document.body, {
            delimiters: [
                { left: '\\[', right: '\\]', display: true },
                { left: '\\(', right: '\\)', display: false }
            ]
        });
     } else {
         setTimeout(waitForKatex, 50); // Check again after 50ms
     }
}



// Update when the button is clicked and once at page load
updateButton.addEventListener("click", updateVariables);
updateVariables();
