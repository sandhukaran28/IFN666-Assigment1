const drivers = [];

exports.getAll = async (req, res) => {
  res.status(200).json(drivers);
}

exports.get = async (req, res) => {
  const driver = drivers.find(driver => driver.licence_number == req.params.id);
  if (!driver) {
    res.status(204).json({ message: "Driver not found" });
  } else {
    res.status(200).json(driver);
  }
}

  exports.create = async (req, res) => {
    const { first_name, last_name, licence_number } = req.body;
    if(!first_name || !last_name || !licence_number) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingDriver = drivers.find(driver => driver.licence_number === String(licence_number));
    if(existingDriver){
      return res.status(409).json({ message: "Driver already exists" });
    }
    else{
      const driver = {
          id: drivers.length + 1,
          first_name,
          last_name,
          licence_number
      };

    drivers.push(driver);
    return  res.status(201).json(driver);
    }
  }

exports.update = async (req, res) => {
  const { id } = req.params;
  const { first_name, last_name } = req.body;
  const driver = drivers.find(driver => driver.id == id);
  if (!driver) {
    res.status(404).json({ message: "Driver not found" });
  } else {
    if(!first_name || !last_name) {
      res.status(400).json({ message: "All fields are required" });
    }
    driver.first_name = first_name;
    driver.last_name = last_name;
    res.status(200).json(driver);
  }

}

exports.deleteDriver = async (req, res) => {
    const driverIndex = drivers.findIndex(driver => driver.id == req.params.id);
    if (driverIndex == -1) {
        res.status(404).json({ message: "Driver not found" });
    } else {
        drivers.splice(driverIndex, 1);
        res.status(204).send();
    }
    }