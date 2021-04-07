class EmployeesController < ApplicationController
    def index
        employees = Employee.all
        render json: EmployeeSerializer.new(employees)
    end

    def show
        employee = Employee.find_by(id: params[:id])
        if employee
            render json: EmployeeSerializer.new(employee)
        else
            render json: { message: 'employee not found' }
        end
    end

    def create
        employee = Employee.new(employee_params)
        if employee.save
            render json: EmployeeSerializer.new(employee,  include: [:title])
        else
            render json: { error: "employee didn't save"}
        end
    end

    def update
        employee = Employee.find_by(id: params[:id])
        if employee.update(employee_params)
            render json: EmployeeSerializer.new(employee, include: [:title])
        else
            render json: { error: "employee didn't save"}
        end
    end

    def destroy
        employee = Employee.find_by(id: params[:id])
        employee.destroy
        render json: { id: params[:id] }
    end

    private

    def employee_params
        params.require(:employee).permit(:name, :image, :years, :title_id, :awards)
    end

end