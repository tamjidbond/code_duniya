import React from 'react';
import Container from '../../Layout/Container';
import Flex from '../../Layout/Flex';

const CopyRitght = () => {
    return (
        <div className='bg-primary text-white py-2'>
            <Container>
                <Flex className='justify-between'>
                    <p>২০২৫ কপিরাইট  | তামজিদ  | সর্বসত্ত্ব সংরক্ষিত</p>
                    <p>প্রাইভেসি পলিসি</p>
                </Flex>
            </Container>
        </div>
    );
};

export default CopyRitght;