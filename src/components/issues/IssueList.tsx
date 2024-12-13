import React from 'react';
import { AlertCircle, Clock, User } from 'lucide-react';
import { format } from 'date-fns';
import type { Issue } from '../../types';

interface IssueListProps {
  issues: Issue[];
  onEditIssue: (issue: Issue) => void;
}

export default function IssueList({ issues, onEditIssue }: IssueListProps) {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'text-red-600 bg-red-50';
      case 'Medium': return 'text-yellow-600 bg-yellow-50';
      case 'Low': return 'text-green-600 bg-green-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Pending': return 'text-red-600 bg-red-50';
      case 'In Progress': return 'text-blue-600 bg-blue-50';
      case 'Resolved': return 'text-green-600 bg-green-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="space-y-4">
      {issues.map((issue) => (
        <div
          key={issue.id}
          onClick={() => onEditIssue(issue)}
          className="bg-white rounded-lg shadow-sm p-4 cursor-pointer hover:shadow-md transition-shadow"
        >
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-4">
              <AlertCircle className="h-5 w-5 text-gray-400 mt-1" />
              <div>
                <p className="text-sm text-gray-900">{issue.description}</p>
                <div className="mt-2 flex items-center gap-2">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getPriorityColor(issue.priority)}`}>
                    {issue.priority}
                  </span>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(issue.status)}`}>
                    {issue.status}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end text-sm text-gray-500">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {format(new Date(issue.createdAt), 'MMM d, yyyy')}
              </div>
              {issue.imageUrl && (
                <img
                  src={issue.imageUrl}
                  alt="Issue"
                  className="mt-2 h-16 w-16 object-cover rounded"
                />
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}