import { List, Item, Icon, Text } from "./FilterCategories.styled";
import sprite from '../../images/sprite.svg';

const FilterCategories = ({ truck }) => {
    const { engine, gas, water, AC, TV, radio, kitchen, bathroom, refrigerator, microwave, transmission } = truck;

    const features = {
        transmission,
        engine,
        gas,
        water,
        AC,
        TV,
        radio,
        kitchen,
        bathroom,
        refrigerator,
        microwave,
    };
    const icons = {
        transmission: `${sprite}#icon-transmission`,
        engine: `${sprite}#icon-fuel-pump`,
        gas: `${sprite}#icon-fire`,
        water: `${sprite}#icon-bathroom`,
        AC: `${sprite}#icon-ac`,
        TV: `${sprite}#icon-tv`,
        radio: `${sprite}#icon-Radio`,
        kitchen: `${sprite}#icon-kitchen`,
        bathroom: `${sprite}#icon-bathroom`,
        refrigerator: `${sprite}#icon-refrigerator`,
        microwave: `${sprite}#icon-microwave`,
    }

    const item = Object.entries(features).filter(
        ([key, value]) => value);


    return (
        <List>
            {item.map(([key, value]) => {
                const filterItem = icons[key];
                const filterName = key === "transmission" || key === "engine" ? value : key;
                return (
                    filterItem && (
                        <Item key={`${key}-${truck.id}`}>
                           <Icon>
                            <use xlinkHref={filterItem} />
                            </Icon>
                            <Text>{filterName}</Text>
                        </Item> 
                    )
                )               
            })}
        </List>
    );
};

export default FilterCategories;
