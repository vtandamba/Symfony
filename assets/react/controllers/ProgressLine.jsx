import * as React from 'react';

import { Progress } from '@chakra-ui/react'

const  ProgressLine = (props) => {

    const {
        value
    } = props

        return  <Progress value={80} bgColor="violet" colorScheme="pink" rounded="full" />

}
export  default ProgressLine