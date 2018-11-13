which python3
if [ $? -ne 0 ];
then
  echo "Python3 not found. You must install Python3 before continuing setup."
  exit 1
fi

which virtualenv
if [ $? -ne 0 ];
then
  echo "virtualenv not found. " +
    "You must install virtualenv before continuing setup."
  exit 1
fi


virtualenv_dir='venv'

# Create virtualenv
virtualenv -p python3 $virtualenv_dir
echo "To activate your virtual environment, run 'source ${virtualenv_dir}/bin/activate'"
# Install dependencies
echo "Installing dependencies"
source $virtualenv_dir/bin/activate
pip install -r requirements.txt
deactivate
echo "Dependencies installed. In order to activate your python virtual environment run 'source ${virtualenv_dir}/bin/activate'"