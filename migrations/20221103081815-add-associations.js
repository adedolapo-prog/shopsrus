'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn(
          'Invoices', // name of Source model
          'CustomerId', // name of the key we're adding 
          {
            type: Sequelize.INTEGER,
            references: {
              model: 'Customers', // name of Target model
              key: 'id', // key in Target model that we're referencing
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
          }, { transaction: t }),
          queryInterface.addColumn(
            'Invoices', // name of Source model
            'DiscountId', // name of the key we're adding 
            {
              type: Sequelize.INTEGER,
              references: {
                model: 'Discounts', // name of Target model
                key: 'id', // key in Target model that we're referencing
              },
              onUpdate: 'CASCADE',
              onDelete: 'SET NULL',
            }, { transaction: t })
      ]);
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn(
          'Invoices', // name of Source model
          'CustomerId', // key we want to remove
          { transaction: t }
        ),
        queryInterface.removeColumn(
          'Invoices', // name of Source model
          'DiscountId', // key we want to remove
          { transaction: t }
        )
      ]);
    });
  }
};