import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../NavigationParamList";
import { ListView, ListViewItemEventData } from "@nativescript/core";

type HomeScreenProps = {
    navigation: FrameNavigationProp<MainStackParamList, "Home">,
};

const models = [
    "gpt2",
    "bert-base-uncased",
    "roberta-base",
    "distilbert-base-uncased",
    "facebook/bart-large-cnn",
];

export function HomeScreen({ navigation }: HomeScreenProps) {
    const onItemTap = (args: ListViewItemEventData) => {
        const selectedModel = models[args.index];
        navigation.navigate("Chat", { model: selectedModel });
    };

    return (
        <flexboxLayout style={styles.container}>
            <label className="text-2xl mb-4 font-bold text-center">
                Select a Hugging Face Model
            </label>
            <ListView
                items={models}
                style={styles.list}
                onItemTap={onItemTap}
                cellFactory={(model) => {
                    return (
                        <label text={model} style={styles.listItem} />
                    );
                }}
            />
        </flexboxLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        flexDirection: "column",
        justifyContent: "center",
        padding: 20,
    },
    list: {
        height: 300,
        width: "100%",
    },
    listItem: {
        fontSize: 16,
        padding: 10,
        backgroundColor: "#f0f0f0",
        margin: 5,
        borderRadius: 5,
    },
});