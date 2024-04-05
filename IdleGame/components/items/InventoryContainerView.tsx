import React from "react";
import ItemView from "./ItemView";
import {StyledInventoryContainerView} from "../../styles/ItemStyles";
import {Container, Row} from "react-grid-system";
import {itemService} from "../../services/ItemService";

const InventoryContainerView = () => {

    return (
        <StyledInventoryContainerView>
            <Container>
                <Row>
                    {Object.entries(itemService.getInventory().items).map((
                        [name, amount]) =>
                        (
                            <ItemView itemName={amount.name} itemAmount={amount.amount} />
                        ))}
                </Row>
            </Container>
        </StyledInventoryContainerView>
    );
};

export default InventoryContainerView;