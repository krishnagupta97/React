import { useState, useCallback, useEffect, useRef } from "react"

function App() {
  const [length, setLength] = useState(8);
  const [isNum, setIsNum] = useState(true);
  const [isChar, setIsChar] = useState(true);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let pass = "";
    if (isNum) str += "0123456789";
    if (isChar) str += `!#$%&\*+,-./:;<=>?@^_|~`;

    for (let i = 1; i <= length; i++) {
      let idx = Math.floor(Math.random() * str.length);
      pass += str[idx];
    }

    setPassword(pass);

  }, [length, isNum, isChar, setPassword]);

  const copyPasswordToClipboard = () => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }

  useEffect(() => {
    passwordGenerator();
  }, [length, isChar, isNum, passwordGenerator]);

  return (
    <div className="h-screen border border-[#1E201E] bg-[#1E201E] flex justify-center items-center">
      <div className="w-full max-w-xl mx-auto shadow-lg rounded-lg px-4 py-3 my-8 bg-[#afafaf]">
        <h1 className="text-black text-center text-3xl font-semibold font-mono my-3">Random Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden my-8 mb-4">
          <input
            type="text"
            placeholder="Generated Password"
            className="outline-none w-full py-1 px-3"
            readOnly
            value={password}
            ref={passwordRef}
          />
          <button className="outline-none text-white px-3 py-0.5 shrink-0 bg-blue-500 hover:bg-blue-700 duration-300" onClick={copyPasswordToClipboard}>Copy</button>
        </div>
        <div className="flex justify-between items-center test-md gap-x-5">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={30}
              value={length}
              className="cursor-pointer"
              onChange={(event) => setLength(event.target.value)}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex justify-between items-center test-md gap-x-5">
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={isNum}
                id="isNumberAllowed"
                onChange={() => setIsNum((prev) => !prev)}
              />
              <label>Numbers</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={isChar}
                id="isCharAllowed"
                onChange={() => setIsChar((prev) => !prev)}
              />
              <label>Special Characters</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
