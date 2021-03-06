export const messageContainerStyle = () => {

    return {
        alignSelf: "flex-start",
        marginBottom: "16px",
        paddingLeft: "16px",
        paddingRight: "16px",
        maxWidth: "65%",
        clear: "both",
    }
}

export const messageWrapperStyle = () => {

    return {
        flex: "1 1",
        position: "relative",
        width: "100%",
    }
}

export const messageThumbnailStyle = () => {

    return {
        width: "36px",
        height: "36px",
        margin: "10px 5px",
        float: "left",
    }
}

export const messageDetailStyle = () => {

    return {
        flex: "1 1",
        display: "flex",
        flexDirection: "column",
        position: "relative"
    }
}

export const nameWrapperStyle = (avatar) => {

    const paddingValue = (avatar) ? {
        paddingLeft: "5px"
    } : {};

    return {
        alignSelf: "flex-start",
        ...paddingValue
    }
}

export const nameStyle = (props) => {

    return {
        fontSize: "10px",
        color: `${props.theme.color.helpText}`,
    }
}

export const messageTxtWrapperStyle = (props) => {

    return {
        display: "flex",
        flexDirection: "column",
        borderRadius: "12px",
        backgroundColor: `${props.theme.backgroundColor.secondary}`,
        padding: "8px 12px",
        alignSelf: "flex-start",
        width: "100%",
    }
}

export const pollQuestionStyle = () => {

    return {
        margin: "0",
        whiteSpace: "pre-wrap",
        wordWrap: "break-word",
        textAlign: "left",
        width: "100%",
        fontSize: "14px",
    }
}

export const pollAnswerStyle = (props) => {

    return {
        listStyleType: "none",
        padding: "0",
        margin: "0",
        "li": {
            backgroundColor: `${props.theme.backgroundColor.white}`,
            margin: "10px 0",
            borderRadius: "8px",
            display: "flex",
            width: "100%",
            cursor: "pointer",
            position: "relative"
        }
    }
}

export const pollTotalStyle = () => {

    return {
        fontSize: "13px",
        margin: "0",
        alignSelf: "flex-end"
    }
}

export const pollPercentStyle = (props, width) => {

    const curvedBorders = (width === "100%") ? { borderRadius: "8px" } : {
        borderRadius: "8px 0 0 8px"
    };

    return {
        maxWidth: "100%",
        width: width,
        ...curvedBorders,
        backgroundColor: `${props.theme.backgroundColor.primary}`,
        minHeight: "35px",
        height: "100%",
        position: "absolute",
        zIndex: "1",
    }
}

export const answerWrapperStyle = (props, optionData, img) => {

    let bgImg = {};
    let txtPadding = "6px 12px";
    let countPadding = txtPadding;
    if (optionData.voters.hasOwnProperty(props.user.uid)) {

        bgImg = {
            background: `url(${img}) no-repeat 10px center`,
        };
        txtPadding = "6px 12px 6px 35px";
        countPadding = "6px 6px 6px 40px";
    }
    
    return {
        width: "100%",
        color: `${props.theme.color.primary}`,
        display: "flex",
        alignItems: "center",
        minHeight: "35px",
        height: "100%",
        ...bgImg,
        zIndex: "2",
        "p": {
            margin: "0",
            padding: txtPadding,
            width: "calc(100% - 40px)",
            whiteSpace: "pre-wrap",
            wordWrap: "break-word",
            fontSize: "14px",
        },
        "span": {
            width: "40px",
            padding: countPadding,
            fontWeight: "bold",
            display: "inline-block",
            fontSize: "13px",
        }
    }
}

export const messageInfoWrapperStyle = () => {

    return {
        alignSelf: "flex-start",
    }
}

export const messageTimestampStyle = (props) => {

    return {
        display: "inline-block",
        fontSize: "11px",
        fontWeight: "500",
        lineHeight: "12px",
        textTransform: "uppercase",
        color: `${props.theme.color.helpText}`,
    }
}