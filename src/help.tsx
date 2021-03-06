import * as React from 'react';

export class SearchHelp extends React.Component {
  render(): React.ReactNode {
    return (
		<div className="w-full xl:w-3/4 lg:w-5/6 mx-auto mt-3">
		  <table className="table-auto text-sm">
			<thead>
			  <tr>
				<th className="px-4 py-2 text-left">Field</th>
				<th className="px-4 py-2 text-left">Options</th>
			  </tr>
			</thead>
			<tbody>
			  <tr>
				<td className="border px-4 py-2 align-top whitespace-no-wrap font-bold">Search</td>
				<td className="border px-4 py-2 align-top">
				  <dl>
					<dt className="font-bold">Multiple terms (AND operation)</dt>
					<dd className="pl-4">
					  <p>To find comments that match two different words, seperate using a "+".</p>
					  <p className="italic">Example: amex+bonus</p>
					</dd>
					<dt className="mt-2 font-bold">Multiple terms (OR operation)</dt>
					<dd className="pl-4">
					  <p>To find comments that match either of two different words, seperate using a "|".</p>
					  <p className="italic">Example: barclays|citi</p>
					</dd>
					<dt className="mt-2 font-bold">Negation</dt>
					<dd className="pl-4">
					  <p>To find comments that match one word but not another word, use a "-" before the word you wish to exclude.</p>
					  <p className="italic">Example: chase -amex</p>
					</dd>
					<dt className="mt-2 font-bold">Exact Phrase</dt>
					<dd className="pl-4">
					  <p>If you wanted to find an exact phrase, you can put the phrase in quotation marks.</p>
					  <p className="italic">Example: "amex gold"</p>
					</dd>
					<dt className="mt-2 font-bold">Combinations</dt>
					<dd className="pl-4">
					  <p>You can combine the previous types of operations and group them using parentheses for advanced searching.</p>
					  <p className="italic">Example: (chase|amex) -citi</p>
					</dd>
				  </dl>
				</td>
			  </tr>
			  <tr>
				<td className="border px-4 py-2 align-top whitespace-no-wrap font-bold">Author</td>
				<td className="border px-4 py-2 align-top">
				  <p>This parameter will restrict the search to specific Reddit authors.</p>
				  <dl>
					<dt className="mt-2 font-bold">Inclusive</dt>
					<dd className="pl-4">
					  <p>To find comments by one author, simply set the value of author to the name. The field is not case-sensitive and allows multiple authors seperated by a comma.</p>
					  <p className="italic">Example: username1,username2</p>
					</dd>
					<dt className="mt-2 font-bold">Exclusive</dt>
					<dd className="pl-4">
					  <p>You can also use this parameter to return comments not made by specific authors.</p>
					  <p className="italic">Example: !username</p>
					</dd>
					<dt className="mt-2 font-bold">Combination</dt>
					<dd className="pl-4">
					  <p>You can combined both inclusive and exclusive by seperating them with a comma.</p>
					  <p className="italic">Example: username1,!username2</p>
					</dd>
				  </dl>
				</td>
			  </tr>
			  <tr>
				<td className="border px-4 py-2 align-top whitespace-no-wrap font-bold">Time Range</td>
				<td className="border px-4 py-2 align-top">
				  <p>Select a time range from the dropdown. Options include 1 day, 1 week, 1 month, 3 months, 6 months, 1 year, 2 year, and custom new options to appear to select a start and end date. Start and End dates should be in MM/DD/YYYY format.</p>
				</td>
			  </tr>
			  <tr>
				<td className="border px-4 py-2 align-top whitespace-no-wrap font-bold">Sort By</td>
				<td className="border px-4 py-2 align-top">
				  <p>Select a sort by parameter for sorting. Options are score and date.</p>
				</td>
			  </tr>
			  <tr>
				<td className="border px-4 py-2 align-top whitespace-no-wrap font-bold">Sort Order</td>
				<td className="border px-4 py-2 align-top">
				  <p>Select a sort order parameter for the direction you want the results to be ordered by. Options for score are highest and lowest; and for date, options are newest and oldest.</p>
				</td>
			  </tr>
			  <tr>
				<td className="border px-4 py-2 align-top whitespace-no-wrap font-bold">Score Filter</td>
				<td className="border px-4 py-2 align-top">
  				  <p>The score parameter allows you to search for comments with a specific score or range of scores. Use greater than or less than to restrict results that match your comparision operator.</p>
				  <p className="italic">Example: &gt;0</p>
				</td>
			  </tr>
			</tbody>
		  </table>
		</div>
	)
  }
}
