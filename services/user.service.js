const User = require('../dataBase/User')

module.exports = {
  getUsersWithPagination: async (query = {}) => {
    const { page = 1, perPage = 5, ...otherFilters } = query;

    console.log(otherFilters);

    const filterQuery = _getUserFilterQuery(otherFilters);

    const skip = (page - 1) * perPage; // 0

    const users = await User.find(filterQuery).skip(skip).limit(perPage);
    const usersCount = await User.countDocuments(filterQuery);

    return {
      page,
      perPage,
      data: users,
      count: usersCount
    }
  }
}


function _getUserFilterQuery(otherFilters) {
  const searchObject = {};

  if (otherFilters.search) {
    Object.assign(searchObject, {
      $or: [
        { name: { $regex: otherFilters.search, $options: 'i' }},
        { email: { $regex: otherFilters.search, $options: 'i' }}
      ]
    })
  }

  if (otherFilters.ageGte) {
    Object.assign(searchObject, {
      age: { $gte: +otherFilters.ageGte }
    })
  }

  if (otherFilters.ageLte) {
    Object.assign(searchObject, {
      age: {
        ...searchObject.age || {},
        $lte: +otherFilters.ageLte
      }
    })
  }

  console.log(JSON.stringify(searchObject, null ,2));

  return otherFilters
}
