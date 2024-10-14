import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { RouteProp } from "@react-navigation/core";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../NavigationParamList";
import { ListView, TextField, Button } from "@nativescript/core";

type ChatScreenProps = {
    route: RouteProp<MainStackParamList, "Chat">,
    navigation: FrameNavigationProp<MainStackParamList, "Chat">,
};

type Message = {
    text: string;
    isUser: boolean;
};

export function ChatScreen({ route }: ChatScreenProps) {
    const [messages, setMessages] = React.useState<Message[]>([]);
    const [inputText, setInputText] = React.useState("");
    const { model } = route.params;

    const sendMessage = async () => {
        if (inputText.trim() === "") return;

        const userMessage: Message = { text: inputText, isUser: true };
        setMessages((prevMessages) => [...prevMessages, userMessage]);

        // Simulating API call (replace with actual API call when possible)
        const botMessage: Message = {
            text: `Response from ${model}: ${inputText.split('').reverse().join('')}`,
            isUser: false,
        };
        setMessages((prevMessages) => [...prevMessages, botMessage]);
        setInputText("");
    };

    return (
        <flexboxLayout style={styles.container}>
            <ListView
                items={messages}
                style={styles.messageList}
                cellFactory={(message) => {
                    return (
                        <label
                            text={message.text}
                            style={message.isUser ? styles.userMessage : styles.botMessage}
                        />
                    );
                }}
            />
            <flexboxLayout style={styles.inputContainer}>
                <TextField
                    style={styles.input}
                    hint="Type a message..."
                    text={inputText}
                    onTextChange={(args) => setInputText(args.object.text)}
                />
                <Button style={styles.sendButton} text="Send" onTap={sendMessage} />
            </flexboxLayout>
        </flexboxLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        flexDirection: "column",
    },
    messageList: {
        flex: 1,
    },
    userMessage: {
        backgroundColor: "#DCF8C6",
        padding: 10,
        margin: 5,
        borderRadius: 10,
        alignSelf: "flex-end",
    },
    botMessage: {
        backgroundColor: "#FFFFFF",
        padding: 10,
        margin: 5,
        borderRadius: 10,
        alignSelf: "flex-start",
    },
    inputContainer: {
        flexDirection: "row",
        padding: 10,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: "#CCCCCC",
        borderRadius: 20,
        padding: 10,
    },
    sendButton: {
        marginLeft: 10,
        backgroundColor: "#2e6ddf",
        color: "#FFFFFF",
        borderRadius: 20,
        padding: 10,
    },
});