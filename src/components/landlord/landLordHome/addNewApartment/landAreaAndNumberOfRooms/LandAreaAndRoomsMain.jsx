import React, { useState } from "react";
import styled from "styled-components";

import CustomRange from "../../../../utils/CustomRange";
import StyledButton from "../../../../utils/StyledButton";
import RoomDetails from "./RoomDetails";
import SliderWithInfo from "./SliderWithInfo";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.white};
  @media (max-width: 767px) {
    flex-direction: column;
    width: 330px;
  }
`;

const RightWrapper = styled.div`
  width: 633px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.white};
  margin: 80px 30px 0 0;
`;

const LeftWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin: 80px 0 0 80px;
  background-color: ${({ theme }) => theme.white};
`;

const Span = styled.span`
  text-align: start;
  width: 380px;
  height: 95px;
  font-family: "Avenir";
  font-style: normal;
  font-weight: 900;
  color: ${(props) => props.theme.dark_Blue};
  font-size: 36px;
  line-height: 120%;
  @media (max-width: 767px) {
    height: 50px;
    margin: 50px 0 0 25px;
  }
`;

const SpanWrapper = styled.div`
  margin: 15px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
const SectionWrapper = styled.div`
  margin: 15px 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  text-align: center;
`;

const BottomInfoWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 225px;
  height: 65px;
  font-family: "Avenir";
  background: ${({ theme }) => theme.light_Grey};
  border: 1px solid ${({ theme }) => theme.light_Grey};
  color: ${({ theme }) => theme.light_Grey_Inactive};
  font-weight: 800;
  font-size: 14px;
  line-height: 150%;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 10px 20px;
  margin-top: 10px;
`;
const WrapperForMargin = styled.div`
  margin: 170px 0 10px 0;
`;

function LandAreaAndRoomsMain(props) {
  const [size, setSize] = useState(50);
  const [room, setRoom] = useState(50);
  const [price, setPrice] = useState(50);

  console.log(size, room, price);

  console.log(size);
  return (
    <Wrapper>
      <LeftWrapper>
        <SpanWrapper>
          <CustomRange st1="true" st2="true" st3="true" />
        </SpanWrapper>

        <SpanWrapper>
          <Span>Please choose the land area and number of rooms.</Span>
        </SpanWrapper>
      </LeftWrapper>

      <RightWrapper>
        <SectionWrapper>
          <SliderWithInfo
            header="Size"
            count={size}
            other="qm+"
            value={size}
            setValue={setSize}
          />
        </SectionWrapper>

        <SectionWrapper>
          <SliderWithInfo
            header="Room"
            count={Math.floor(room / 5)}
            other="+"
            value={room}
            setValue={setRoom}
          />
        </SectionWrapper>

        <SectionWrapper>
          <RoomDetails />
        </SectionWrapper>

        <SectionWrapper>
          <SliderWithInfo
            header="Price"
            count={price * 200}
            other="$+"
            value={price}
            setValue={setPrice}
          />{" "}
          <BottomInfoWrapper>
            Regular price for a flat with your options is $ {price * 200}
          </BottomInfoWrapper>
        </SectionWrapper>

        <WrapperForMargin />
        <Link style={{ textDecoration: "none" }} to="/descriptionAndImages">
          <StyledButton margin="0 0 10px 0" height="52px" width="557px">
            Next
          </StyledButton>
        </Link>
      </RightWrapper>
    </Wrapper>
  );
}

export default LandAreaAndRoomsMain;
