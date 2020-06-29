import React, { CSSProperties } from 'react';
import Notification from '../components/notification';

export default {
    title: 'Notification',
    component: Notification,
};

const styleWrap: CSSProperties = {
    width: 500,
};

export const Basic: React.FC<{}> = () => (
    <div style={ styleWrap }>
        <Notification>
            <span>The Church of St. Peter and St. Paul is a Catholic church located in the Antakalnis neighbourhood of Vilnius, Lithuania. Constructed between 1668 and 1701, it is the centerpiece of a former monastery complex of the Canons Regular of the Lateran. Its unique interior has masterful compositions of some two thousand stucco figures by Pietro Perti and ornamentation by Giovanni Maria Galli da Bibiena.</span>
        </Notification>
    </div>
);

export const Color: React.FC<{}> = () => (
    <div style={ styleWrap }>
        <Notification appearance="primary">
            <span>The Church of St. Peter and St. Paul is a Catholic church located in the Antakalnis neighbourhood of Vilnius, Lithuania. Constructed between 1668 and 1701, it is the centerpiece of a former monastery complex of the Canons Regular of the Lateran. Its unique interior has masterful compositions of some two thousand stucco figures by Pietro Perti and ornamentation by Giovanni Maria Galli da Bibiena.</span>
        </Notification>
        <Notification appearance="info">
            <span>The Church of St. Peter and St. Paul is a Catholic church located in the Antakalnis neighbourhood of Vilnius, Lithuania. Constructed between 1668 and 1701, it is the centerpiece of a former monastery complex of the Canons Regular of the Lateran. Its unique interior has masterful compositions of some two thousand stucco figures by Pietro Perti and ornamentation by Giovanni Maria Galli da Bibiena.</span>
        </Notification>
        <Notification appearance="success">
            <span>The Church of St. Peter and St. Paul is a Catholic church located in the Antakalnis neighbourhood of Vilnius, Lithuania. Constructed between 1668 and 1701, it is the centerpiece of a former monastery complex of the Canons Regular of the Lateran. Its unique interior has masterful compositions of some two thousand stucco figures by Pietro Perti and ornamentation by Giovanni Maria Galli da Bibiena.</span>
        </Notification>
        <Notification appearance="warning">
            <span>The Church of St. Peter and St. Paul is a Catholic church located in the Antakalnis neighbourhood of Vilnius, Lithuania. Constructed between 1668 and 1701, it is the centerpiece of a former monastery complex of the Canons Regular of the Lateran. Its unique interior has masterful compositions of some two thousand stucco figures by Pietro Perti and ornamentation by Giovanni Maria Galli da Bibiena.</span>
        </Notification>
        <Notification appearance="danger">
            <span>The Church of St. Peter and St. Paul is a Catholic church located in the Antakalnis neighbourhood of Vilnius, Lithuania. Constructed between 1668 and 1701, it is the centerpiece of a former monastery complex of the Canons Regular of the Lateran. Its unique interior has masterful compositions of some two thousand stucco figures by Pietro Perti and ornamentation by Giovanni Maria Galli da Bibiena.</span>
        </Notification>
    </div>
);

export const Light: React.FC<{}> = () => (
    <div style={ styleWrap }>
        <Notification appearance="primary" light>
            <span>The Church of St. Peter and St. Paul is a Catholic church located in the Antakalnis neighbourhood of Vilnius, Lithuania. Constructed between 1668 and 1701, it is the centerpiece of a former monastery complex of the Canons Regular of the Lateran. Its unique interior has masterful compositions of some two thousand stucco figures by Pietro Perti and ornamentation by Giovanni Maria Galli da Bibiena.</span>
        </Notification>
        <Notification appearance="info" light>
            <span>The Church of St. Peter and St. Paul is a Catholic church located in the Antakalnis neighbourhood of Vilnius, Lithuania. Constructed between 1668 and 1701, it is the centerpiece of a former monastery complex of the Canons Regular of the Lateran. Its unique interior has masterful compositions of some two thousand stucco figures by Pietro Perti and ornamentation by Giovanni Maria Galli da Bibiena.</span>
        </Notification>
        <Notification appearance="success" light>
            <span>The Church of St. Peter and St. Paul is a Catholic church located in the Antakalnis neighbourhood of Vilnius, Lithuania. Constructed between 1668 and 1701, it is the centerpiece of a former monastery complex of the Canons Regular of the Lateran. Its unique interior has masterful compositions of some two thousand stucco figures by Pietro Perti and ornamentation by Giovanni Maria Galli da Bibiena.</span>
        </Notification>
        <Notification appearance="warning" light>
            <span>The Church of St. Peter and St. Paul is a Catholic church located in the Antakalnis neighbourhood of Vilnius, Lithuania. Constructed between 1668 and 1701, it is the centerpiece of a former monastery complex of the Canons Regular of the Lateran. Its unique interior has masterful compositions of some two thousand stucco figures by Pietro Perti and ornamentation by Giovanni Maria Galli da Bibiena.</span>
        </Notification>
        <Notification appearance="danger" light>
            <span>The Church of St. Peter and St. Paul is a Catholic church located in the Antakalnis neighbourhood of Vilnius, Lithuania. Constructed between 1668 and 1701, it is the centerpiece of a former monastery complex of the Canons Regular of the Lateran. Its unique interior has masterful compositions of some two thousand stucco figures by Pietro Perti and ornamentation by Giovanni Maria Galli da Bibiena.</span>
        </Notification>
    </div>
);
