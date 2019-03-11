import * as React from "react";
import {useState} from "react";
import styled from "styled-components";
import {TextInput} from "./components/inputs/textInput";
import {Theme} from "./customTheme";
import {ThemeProvider} from "./theme/theme";

export const PlayGround = () => {
    const [text, setText] = useState("");
  return (
      <PlayGroundDiv>
          <ThemeProvider theme={Theme}>
              <PlayGroundInsideDiv>
                <TextInput onChange={setText} value={text} label="test"/>
              </PlayGroundInsideDiv>
          </ThemeProvider>
      </PlayGroundDiv>
  )
};

const PlayGroundDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const PlayGroundInsideDiv = styled.div`
  width: 300px;
`;