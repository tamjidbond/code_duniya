import React from 'react';
import icon1 from './../assets/icon1.png'
import Container from '../Layout/Container';
import CategoryCard from './CategoryCard';
import Flex from '../Layout/Flex';

const Category = () => {

    const items = [
        {
            name: 'Graphics',
            icon: icon1
        },
        {
            name: 'Graphics',
            icon: icon1
        },
        {
            name: 'Graphics',
            icon: icon1
        },
        {
            name: 'Graphics',
            icon: icon1
        },
    ]
    return (
        <div className='mt-10'>
            <Container >
                <Flex className='justify-around items-center'>
                    {
                        items.map((item) => (
                            <CategoryCard key={item.key} item={item}></CategoryCard>
                        ))
                    }
                </Flex>
            </Container>
        </div>
    );
};

export default Category;