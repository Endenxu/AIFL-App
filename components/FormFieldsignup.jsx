import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";

import { icons } from "../constants";

const FormFieldsignup = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-black-700 font-pmedium">{title}</Text>

      <View className="w-full h-14 px-4 bg-black-950 rounded-2xl border-grey-700 border-2 focus:border-neutral-300 flex flex-row items-center">
        <TextInput
          className="flex-1 text-black-950 font-psemibold text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#f8fafc"
          onChangeText={handleChangeText}
          secureTextEntry={placeholder === "Password" && !showPassword}
          {...props}
        />

        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormFieldsignup;
