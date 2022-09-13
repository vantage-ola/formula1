import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";

function PickYear() {
    const [year, setYear] = useState(new Date().getFullYear().toString());
    // generates an array from 1950 till date
    const seasons = Array.from(Array(new Date().getFullYear() - 1949), (_, i) => (i + 1950).toString())

    return (
    <Picker
        selectedValue={year}
        onValueChange={(value, index) => setYear(value)}
        mode="dialog"
    >
    {seasons.map(s=>{
            return <Picker.Item  key={s} label={s} value={s}/>
    })}
    </Picker>

    )
}

export default PickYear