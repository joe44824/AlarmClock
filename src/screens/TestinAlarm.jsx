import React, { useState } from "react";
import { View, Button } from "react-native";
import AlarmClock from "react-native-alarm-clock";

const SetAlarm = () => {
  const [alarmTime, setAlarmTime] = useState(null);

  const handleSetAlarm = () => {
    AlarmClock.createAlarm({
      hour: 8,
      minute: 0,
      message: "Wake up!",
      soundName: "default",
      vibrate: true,
    })
      .then(() => {
        console.log("Alarm set successfully");
        setAlarmTime(new Date());
      })
      .catch((error) => {
        console.log("Error setting alarm: ", error);
      });
  };

  return (
    <View>
      <Button title="Set Alarm" onPress={handleSetAlarm} />
      {alarmTime && (
        <Text>
          Alarm set for{" "}
          {alarmTime.toLocaleTimeString([], { timeStyle: "short" })}
        </Text>
      )}
    </View>
  );
};

export default SetAlarm;
