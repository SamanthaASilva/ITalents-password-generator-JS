const charTypes = {
    upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lower: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    symbols: "!@#$%&*"
  };
  
  const get = id => document.getElementById(id);
  
  const getCheckedOptions = () => {
    const { checked: upper } = get("uppercase");
    const { checked: lower } = get("lowercase");
    const { checked: numbers } = get("numbers");
    const { checked: symbols } = get("symbols");
  
    return { upper, lower, numbers, symbols };
  };
  
  const generatePassword = () => {
    const length = +get("length").value;
    const options = getCheckedOptions();
  
    const selectedChars = [
      ...(options.upper ? charTypes.upper : ""),
      ...(options.lower ? charTypes.lower : ""),
      ...(options.numbers ? charTypes.numbers : ""),
      ...(options.symbols ? charTypes.symbols : "")
    ];
  
    let password = "";
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * selectedChars.length);
      password += selectedChars[randomIndex];
    }
  
    get("result").textContent = password.length
      ? `${password}`
      : "Selecione pelo menos uma opção!";
  };
  