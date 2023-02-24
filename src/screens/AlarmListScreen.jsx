import { View, Text, FlatList, StyleSheet } from "react-native";
import { useState } from "react";
import { ListItem, Icon, Button } from "@rneui/themed";

const alarmData = [
  { id: "1", time: "08:00 AM", days: ["Mon", "Wed", "Fri"], enabled: true },
  {
    id: "2",
    time: "12:30 PM",
    days: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
    enabled: true,
  },
  { id: "3", time: "07:00 AM", days: ["Sat", "Sun"], enabled: false },
  { id: "4", time: "08:00 AM", days: ["Tue", "Sat", "Sun"], enabled: true },
  { id: "5", time: "09:00 AM", days: ["Sat", "Sun"], enabled: true },
  { id: "6", time: "10:00 AM", days: ["Thur", "Fri"], enabled: false },
  {
    id: "7",
    time: "11:00 AM",
    days: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
    enabled: false,
  },
  { id: "8", time: "12:00 PM", days: ["Sat", "Sun"], enabled: true },
];

const AlarmListScreen = () => {
  const [alarms, setAlarms] = useState(alarmData);

  const toggleAlarm = (id) => {

    setAlarms(
      alarms.map((alarm) => {
        if (alarm.id === id) {
          return { ...alarm, enabled: !alarm.enabled };
        } else {
          return alarm;
        }
      })
    );
  };

  const deleteAlarm = (id) => {
    console.log("alarm deleted");
    setAlarms(alarms.filter((alarm) => alarm.id !== id));
  };

  const renderAlarmItem = ({ item }) => (
    <View style={styles.item}>
      <ListItem.Swipeable
        key={item.id}
        onPress={() => toggleAlarm(item.id)}
        rightContent={() => (
          <Button
            title="Delete"
            onPress={() => deleteAlarm(item.id)}
            icon={{ name: "delete", color: "white" }}
            buttonStyle={{ minHeight: "100%", backgroundColor: "red" }}
          />
        )}
      >
        <Icon
          name={item.enabled ? "alarm-on" : "alarm-off"}
          type="material-icons"
          color={item.enabled ? "green" : "red"}
        />
        <ListItem.Content>
          <ListItem.Title>{item.time}</ListItem.Title>
          <ListItem.Subtitle>{item.days.join(", ")}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem.Swipeable>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={alarms}
        renderItem={renderAlarmItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

export default AlarmListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flexGrow: 1,
    alignItems: "stretch",
  },
  item: {
    alignSelf: "stretch",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});
