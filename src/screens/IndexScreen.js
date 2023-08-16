import React, { useContext } from "react";
import {
    Text,
    StyleSheet,
    View,
    FlatList,
    Button,
    TouchableOpacity,
} from "react-native";
import BlogContext from "../context/BlogContext";

const IndexScreen = () => {
    const { data, addBlogPost, test } = useContext(BlogContext);

    return (
        <View style={styles.containerStyle}>
            <Text>Index Screen</Text>
            <Text>{test}</Text>
            <Button title="Add Post" onPress={addBlogPost} />
            <FlatList
                data={data}
                keyExtractor={(blogPost) => blogPost.title}
                renderItem={({ item }) => {
                    return (
                        <View>
                            <Text>{item.title}</Text>
                        </View>
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
    },
});

export default IndexScreen;
