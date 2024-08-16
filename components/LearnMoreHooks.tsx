import { useState, useEffect, useCallback, useRef } from 'react';
import { Text, View, Button } from 'react-native';
export const LearnMoreHooks = () => {
  const [seconds, setSeconds] = useState(0);
  const inputRef = useRef(null);

  function onClickButton () { 
	// console.log(inputRef);
	// console.log(inputRef.current);	
	// console.log(inputRef.current?.value);	
	inputRef.current.value = "awokowakowa"
  }

	useEffect(() => {
		console.log(">>>>>>>>>>>>>>>>")
		const intervalId = setInterval(() => {
		setSeconds(prevSeconds => prevSeconds + 1);
		}, 1000);

		// Cleanup function to clear the interval when the component unmounts
		return () => clearInterval(intervalId);
	}, []);

  const resetTimerCallBack = useCallback(() => {
	console.log(">>>>>>>>>>>>>>>>. render boyyy")

    setSeconds(0);
  }, []);

  const resetTimer = () => {
	console.log(">>>>>>>>>>>>>>>>. render boyyy 2")

    setSeconds(0);
  };
  return (
		<View>
			<input 
				type="text"
				ref={inputRef}
			/>
			<Text>Elapsed time: {seconds} seconds</Text>
			<Button title="Reset Timer" onPress={resetTimer} />
			<Button title="Reset Timer using useCallback" onPress={resetTimerCallBack} />
			<Button title="Learn Use Ref" onPress={onClickButton} />
		</View>
	)
};