import React from 'react';
import { Table } from 'react-bootstrap';

const DonationList = () => {
    return (
        <Table striped bordered hover variant="dark">
          <thead>
            <tr className="text-center">
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Item Name</th>
              <th>Category</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
        </Table>
    );
};

export default DonationList;